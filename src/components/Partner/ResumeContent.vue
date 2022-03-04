<template>
  <div class="row mt-2">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-header text-center">Resumen Financiero</div>
        <div class="card-body" style="height: 150px">Body</div>
        <div class="card-footer">
          <div class="right">
            <button class="btn btn-primary">Pagar</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card">
        <div class="card-header text-center">Avisos Importantes</div>
        <div class="card-body" style="height: 150px">Body</div>
        <div class="card-footer">
          <div class="right">
            <button class="btn btn-primary">Limpiar</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-12 mt-2">
      <div class="card">
        <div class="card-header text-center">
          Haga click sobre el servicio al que desee acceder
        </div>
        <div class="card-body overflow-auto">
          <div class="row showServiceMap">
            <div class="lineMap col-md-12"></div>
            <div class="lineMap col-md-12"></div>
            <div class="row lineMap">
              <div class="col-md-2"></div>
              <div class="row col-md-2">
                <div class="col-md-6"></div>
                <div class="col-md-6">
                  <Popper content="Área Comercial">
                    <router-link to="/BusinessPartner">
                      <i
                        class="fas fa-store fa-2x fa_cianShadowText_2_2_5"
                        aria-hidden="true"
                      >
                      </i>
                      <br />
                      <span>Comercios</span>
                    </router-link>
                  </Popper>
                </div>
              </div>
              <div class="col-md-2">
                <Popper content="Raquet Ball">
                  <a href="#">
                    <i
                      class="fas fa-table-tennis-paddle-ball fa-2x fa_cianShadowText_2_2_5"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Raquet</span>
                  </a>
                </Popper>
              </div>
              <div class="col-md-1">
                <Popper content="Paddle">
                  <a href="#">
                    <i
                      class="fas fa-table-tennis-paddle-ball fa-2x fa_cianShadowText_2_2_5"
                      title="Paddle"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Paddle</span>
                  </a>
                </Popper>
              </div>
              <div class="col-md-5"></div>
            </div>
            <div class="row lineMap">
              <div class="col-md-3 text-center">
                <Popper content="Estacionamiento">
                  <a href="#">
                    <i
                      class="fas fa-car-rear fa-2x fa_cianShadowText_2_2_5"
                      aria-hidden="true"
                    >
                    </i
                    ><br />
                    <span>Estacionamiento</span>
                  </a>
                </Popper>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-2 ms-3">
                <Popper content="Tenis de Mesa">
                  <a href="#">
                    <i
                      class="fas fa-table-tennis-paddle-ball fa-2x fa_cianShadowText_2_2_5"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Tenis de Mesa</span>
                  </a>
                </Popper>
              </div>
              <div class="col-md-1">
                <Popper content="La Raqueta">
                  <a href="#">
                    <i
                      class="fas fa-hotdog fa-2x fa_cianShadowText_2_2_5"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>La Raqueta</span>
                  </a>
                </Popper>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-1">
                <Popper content="BasquetBall">
                  <a class="textoNegro" href="#">
                    <i
                      class="fas fa-basketball fa-2x fa_cianShadowText_2_2_5"
                      title="Basquet"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Basquet</span>
                  </a>
                </Popper>
              </div>
              <div class="col-md-1">
                <Popper content="Volibol">
                  <a class="textoNegro" href="#">
                    <i
                      class="fas fa-volleyball fa-2x fa_cianShadowText_2_2_5"
                      title="Volibol"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Volibol</span>
                  </a>
                </Popper>
              </div>
              <div class="col-md-2"></div>
            </div>
            <div class="lineMap"></div>
            <div class="lineMap"></div>
            <div class="row lineMap">
              <div class="col-md-3"></div>
              <div class="col-md-1">
                <Popper content="Frontón">
                  <a href="#">
                    <i
                      class="fas fa-table-tennis-paddle-ball fa-2x fa_cianShadowText_2_2_5"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Frontón</span>
                  </a>
                </Popper>
              </div>
              <div class="col-md-3">
                <Popper content="Tenis de Campo">
                  <a href="#">
                    <i
                      class="fas fa-table-tennis-paddle-ball fa-2x fa_cianShadowText_2_2_5"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Tenis de Campo</span>
                  </a>
                </Popper>
              </div>
              <div class="col-md-5"></div>
            </div>
            <div class="row lineMap">
              <div class="col-md-4"></div>
              <div class="col-md-1">
                <Popper content="Servicios Médicos">
                  <a href="#">
                    <i
                      class="fas fa-bandage fa-2x fa_cianShadowText_2_2_5"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Servicios Médicos</span>
                  </a>
                </Popper>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-1">
                <Popper content="U.E.P. Colegio Castelao">
                  <a href="#">
                    <i
                      class="fas fa-book-open-reader fa-2x fa_cianShadowText_2_2_5"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Colegio Castelao</span>
                  </a>
                </Popper>
              </div>
              <div class="col-md-5"></div>
            </div>
            <div class="lineMap"></div>
            <div class="row lineMap">
              <div class="col-md-4"></div>
              <div class="col-md-1">
                <Popper content="Área Administrativa">
                  <a href="#">
                    <i
                      class="fas fa-credit-card fa-2x fa_cianShadowText_2_2_5"
                      title="Administración"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Administración</span>
                  </a>
                </Popper>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-1">
                <Popper content="La Tasca">
                  <a href="#">
                    <i
                      class="fas fa-utensils fa-2x fa_cianShadowText_2_2_5"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>La Tasca</span>
                  </a>
                </Popper>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-1">
                <Popper content="Fútbol">
                  <a class="textoNegro" href="#">
                    <i
                      class="fas fa-futbol fa-2x fa_cianShadowText_2_2_5"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Fútbol</span>
                  </a>
                </Popper>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-2">
                <Popper content="Pool">
                  <a href="#">
                    <i
                      class="fas fa-bowling-ball fa-2x fa_cianShadowText_2_2_5"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Pool</span>
                  </a>
                </Popper>
              </div>
            </div>
            <div class="row lineMap">
              <div class="col-md-2"></div>
              <div class="col-md-2">
                <Popper content="Gimnasio">
                  <a href="#">
                    <i
                      class="fas fa-dumbbell fa-2x fa_cianShadowText_2_2_5"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Gimnasio</span>
                  </a>
                </Popper>
              </div>
              <div class="col-md-8"></div>
            </div>
            <div class="row lineMap">
              <div class="col-md-10"></div>
              <div class="col-md-1">
                <Popper content="La Marina">
                  <a href="#">
                    <i
                      class="fas fa-utensils fa-2x fa_cianShadowText_2_2_5"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>La Marina</span>
                  </a>
                </Popper>
              </div>
              <div class="col-md-1"></div>
            </div>
            <div class="row lineMap">
              <div class="col-md-10"></div>
              <div class="col-md-2">
                <Popper content="A Chave">
                  <a class="textoNegro" href="#">
                    <i
                      class="fas fa-utensils fa-2x fa_cianShadowText_2_2_5"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>A Chave</span>
                  </a>
                </Popper>
              </div>
            </div>
            <div class="lineMap"></div>
            <div class="row lineMap">
              <div class="col-md-1"></div>
              <div class="col-md-2">
                <Popper content="Teatro">
                  <a href="#">
                    <i
                      class="fas fa-masks-theater fa-2x fa_cianShadowText_2_2_5"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Teatro</span>
                  </a>
                </Popper>
              </div>
            </div>
            <div class="row lineMap">
              <div class="col-md-4"></div>
              <div class="col-md-2">
                <Popper content="Natación">
                  <a href="#">
                    <i
                      class="fas fa-person-swimming fa-2x fa_cianShadowText_2_2_5"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Natación</span>
                  </a>
                </Popper>
              </div>
              <div class="col-md-2"></div>
              <div class="col-md-2">
                <Popper content="Xacobeo">
                  <a href="#" class="textoNegro">
                    <i
                      class="fas fa-utensils fa-2x fa_cianShadowText_2_2_5"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Xacobeo</span>
                  </a>
                </Popper>
              </div>
              <div class="col-md-2"></div>
            </div>
            <div class="lineMap"></div>
            <div class="lineMap"></div>
            <div class="row lineMap">
              <div class="col-md-5"></div>
              <div class="col-md-2">
                <Popper content="La Plaza">
                  <a href="#">
                    <i
                      class="fas fa-utensils fa-2x fa_cianShadowText_2_2_5"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>La Plaza</span>
                  </a>
                </Popper>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-2">
                <Popper content="Área Directiva">
                  <a href="#">
                    <i
                      class="fas fa-users fa-2x fa_cianShadowText_2_2_5"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>J. Directiva</span>
                  </a>
                </Popper>
              </div>
              <div class="col-md-2"></div>
            </div>
            <div class="lineMap"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Popper from "vue3-popper";

export default {
  // eslint-disable-next-line
  name: "ResumeContent",
  components: {
    Popper,
  },
  data() {
    return {};
  },
  mounted() {},
  created() {},
};
</script>

<style></style>
