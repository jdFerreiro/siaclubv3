<template>
  <div class="w-90 m-auto bg-white bradius20 p-4">
    <h5 class="text-center">{{ tableInfo.tableHeader }}</h5>
    <DataTable
      :value="dataResult"
      editMode="row"
      :dataKey="tableInfo.dataKey"
      @row-edit-save="onRowEditSave"
      responsiveLayout="scroll"
      v-model:editingRows="editingRows"
    >
      <Column
        v-for="col of tableInfo.fields"
        :key="col.field"
        :field="col.field"
        :header="col.header"
      >
        <template #editor="{ data, field }">
          <InputText v-if="!col.dropDown" v-model="data[field]" />
          <DropDown
            v-if="col.dropDown"
            placeholder="Seleccione una opción"
            v-model="data[field]"
            :show="getDropDownData(col.dropDown.apiPath)"
            :options="dropDownData"
            :optionLabel="col.dropDown.fieldLabel"
            :optionValue="col.dropDown.fieldValue"
          >
          </DropDown>
        </template>
        <template #body="slotProps">
          <span v-if="!col.dropDown">
            {{ slotProps.data[col.showField] }}
          </span>
          <span v-if="col.dropDown">
            {{ getDropDownValue(slotProps, col.showField) }}
          </span>
        </template>
      </Column>
      <Column
        :rowEditor="true"
        style="width: 10%; min-width: 8rem"
        bodyStyle="text-align:center"
      ></Column>
    </DataTable>
  </div>
</template>

<script>
export default {
  name: "TablaGeneral",
  props: {
    tableInfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editingRows: [],
      dataResult: [],
      selectedChild: null,
      selectData: null,
      selectedDropDownValue: null,
      dropDownData: [],
    };
  },
  computed: {
    hasData: function () {
      return this.dataResult.length > 0;
    },
  },
  mounted() {
    this.loadData();
  },
  methods: {
    getDropDownValue(slotProps, field) {
      var ddField = field.split(".");
      var responseValue = slotProps.data[ddField[0]][ddField[1]];
      return responseValue;
    },
    loadData() {
      if (this.tableInfo.apiPathGet) {
        this.$store
          .dispatch(this.tableInfo.apiPathGet)
          .then((result) => {
            this.dataResult = result.data;
          })
          .catch((error) => {
            if (error.response.status == 403) {
              this.$store.state.auth.status.loggedIn = false;
              this.$router.push("/login");
            }
          });
      }
    },
    getDropDownData(apiPath) {
      if (this.dropDownData.length == 0) {
        return this.$store
          .dispatch(apiPath)
          .then((result) => {
            this.dropDownData = result.data;
          })
          .catch((error) => {
            if (error.response.status == 403) {
              this.$store.state.auth.status.loggedIn = false;
              this.$router.push("/login");
            }
            this.dropDownData = [];
          });
      }
    },
    onRowEditSave(event) {
      this.$store
        .dispatch(this.tableInfo.apiPathUpdate, event.newData)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status == 403) {
            this.$store.state.auth.status.loggedIn = false;
            this.$router.push("/login");
          }
        });
    },
    getStatusLabel(status) {
      console.log(status);
    },
    onCellEditComplete(event) {
      let { data, newValue, field } = event;

      switch (field) {
        case "quantity":
        case "price":
          if (this.isPositiveInteger(newValue)) data[field] = newValue;
          else event.preventDefault();
          break;
        default:
          if (newValue.trim().length > 0) data[field] = newValue;
          else event.preventDefault();
          break;
      }
    },
  },
};
</script>

<style></style>
