<template>
  <div class="PriseCommandes">
    <html>
      <title>Prise de Commandes</title>
      <body>
        <!-- Sidebar/menu -->
        <div class="w3-black">
          <div class="w3-row">
            <div class="w3-container w3-quarter" style="padding-top: 35px">
              <div id="London" class="city">
                <h1>Total</h1>
                <p></p>
              </div>
              <footer class="w3-container">
                <button class="w3-button w3-padding-large w3-green">
                  Valider
                </button>
                <button class="w3-button w3-padding-large w3-red">
                  Annuler
                </button>
                <button class="w3-button w3-padding-large w3-green">
                  Emporter
                </button>
                <button class="w3-button w3-padding-large w3-red">
                  diviser
                </button>
                <button class="w3-button w3-padding-large w3-green">+1</button>
              </footer>
            </div>
            <!-- !PAGE CONTENT! -->
            <div class="w3-container w3-threequarter">
              <div class="w3-rest">
                <!-- Header -->
                <header class="w3-container" style="padding-top: 35px">
                  <h5>
                    <b>Catégories</b>
                  </h5>
                </header>
                <div class="w3-margin-bottom" v-for="category in categorys" v-bind:key="category.category_id">
                  <div class="w3-quarter w3-button" @click="getProduct()">
                    <div class="w3-container w3-red w3-padding-16">
                      <div class="w3-clear">{{ category.category_des  }}</div>
                      <h4></h4>
                    </div>
                  </div>
                </div>
              </div>
              <header class="w3-container">
                <h5>
                  <b><i class="fa fa-dashboard"></i>Suppléments</b>
                </h5>
              </header>
              <div class="w3-panel">
                <div class="w3-margin-bottom" v-for="product in products" v-bind:key="product.category_id">
                  <div class="w3-quarter w3-button">
                    <div class="w3-container w3-blue w3-padding-16">{{ product.product_name }}
                      <div class="w3-clear"></div>
                      <h4>{{ product.product_price }}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <header class="w3-container">
                <h5>
                  <b><i class="fa fa-dashboard"></i>Menus</b>
                </h5>
              </header>
              <div class="w3-panel">
                <div class="w3-row-padding w3-margin-bottom">
                  <div id="Prix" class="w3-quarter w3-button">
                    <div class="w3-container w3-red w3-padding-16">
                      <div class="w3-left">
                        <i class="w3-small">
                          <button class="w3-button w3-black">L</button>
                          <button class="w3-button w3-black">XL</button>
                          <button class="w3-button w3-black">XXL</button>
                        </i>
                      </div>
                      <div class="w3-clear w3-large">Pizza Boisée</div>
                      <div class="w3-clear"><datagrid>450 da</datagrid></div>
                    </div>
                  </div>
                  <div class="w3-quarter w3-button">
                    <div class="w3-container w3-blue w3-padding-16">
                      <div class="w3-left">
                        <i class="w3-small">
                          <button class="w3-button w3-black">L</button>
                          <button class="w3-button w3-black">XL</button>
                          <button class="w3-button w3-black">XXL</button>
                        </i>
                      </div>
                      <div class="w3-clear w3-large">Pizza Napolitaine</div>
                      <div class="w3-clear"><datagrid>450 da</datagrid></div>
                    </div>
                  </div>
                  <div class="w3-quarter w3-button">
                    <div class="w3-container w3-teal w3-padding-16">
                      <div class="w3-left">
                        <i class="w3-small">
                          <button class="w3-button w3-black">L</button>
                          <button class="w3-button w3-black">XL</button>
                          <button class="w3-button w3-black">XXL</button>
                        </i>
                      </div>
                      <div class="w3-clear w3-large">Pizza Fumée</div>
                      <div class="w3-clear"><datagrid>450 da</datagrid></div>
                    </div>
                  </div>
                  <div class="w3-quarter w3-button">
                    <div
                      class="w3-container w3-orange w3-text-white w3-padding-16"
                    >
                      <div class="w3-left">
                        <i class="w3-small">
                          <button class="w3-button w3-black">L</button>
                          <button class="w3-button w3-black">XL</button>
                          <button class="w3-button w3-black">XXL</button>
                        </i>
                      </div>
                      <div class="w3-clear w3-large">Pizza Carbonara</div>
                      <div class="w3-clear"><datagrid>450 da</datagrid></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'PriseCommandes',
  data() {
    return {
      categorys: [],
      category_id: null,
      category_des:'',
      products: [],
      product_id: null,
      type_id: null,
      product_name:'',
      product_price:'',
    };
  },
  methods: {
    getCategory: function () {
        axios.get('http://127.0.0.1:8000/api/Category/').then((response) => {
        this.categorys = response.data;
      })
    },
    getProduct: function () {
        axios.get('http://127.0.0.1:8000/api/Product/').then((response) => {
        this.products = response.data;
      })
    }
    },
  mounted: function (){
    this.getCategory()
    this.getProduct()
  },
}
</script>
<style scoped>
</style><style>
@import "https://www.w3schools.com/w3css/4/w3.css";
@import "https://fonts.googleapis.com/css?family=Raleway";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
</style>