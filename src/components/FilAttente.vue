<template>
  <div class="FilAttente">
    <html>
      <title>Prise de Commandes</title>
        <body>
            <div class="class1" style="background-color:#9BCB3B;">
                <p>Hi</p>
            </div>
    <div class="class2" style="background-color:#1AB99E;">
        <p>Aditya</p>
    </div>
    <div class="class3" style="background-color:#F36F25;">
            <p>This is Working!</p>
        </div>
    </body>
    </html>
  </div>
</template>
<script>
export default {
  name: "FilAttente",
  data() {
    return {
      title: "FilAttente",
    };
  },
};
</script>
<style scoped>
body {
  width: 100%;
  float: left;
}

.class1,
.class2,
.class3 {
  width: 33.33%;
  float: left;
  height: 100px;
}

p {
  padding-top: 25px;
  text-align: center;
}
</style>