<template>
  <RouterView></RouterView>
</template>

<style>
body {
  background-image: url('https://cdn.pixabay.com/photo/2019/06/18/15/14/mandala-4282571_1280.jpg');
  font-family: Arial;
  text-align: center;
  width: 900px;
  margin: 0 auto;
}

/*Rubrik*/
h1 {
  font-size: 35px;
  font-family: 'Segoe Script';
}

p {
  font-size: 15px;
  color: white;
  background-color: #7855a1;
  border: 1px solid gainsboro;
  padding: 25px;
  margin: 20px;
}

.meow {
  font-size: 15px;
  text-align: center;
  width: 200px;
  padding: 10px;
  color: white;
  background-color: #7855a1;
  margin: 25px auto;
}

/* Knappar */
.button1 {
  padding: 16px 32px;
  margin: 4px 2px;
  cursor: pointer;
}

/* Knappar default */
.button2 {
  background-color: #0d7d86;
  color: white;
  border: 1px solid gainsboro;
}

/* När knappar hoovras över */
.button2:hover {
  background-color: #7855a1;
  color: black;
}

/* Navbar */
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #0d7d86;
}

/* Navbar */
li {
  float: left;
  border-right: 1px solid gainsboro;
}

/* Navbar länkar*/
li a {
  display: block;
  color: white;
  padding: 14px 16px;
  text-decoration: none; /*Inget sträck under länkar*/
  font-family: 'Segoe Script';
}

/*När navbar-länkarna hoovras över*/
li a:hover:not(.active) {
  background-color: #7855a1;
  color: black;
  font-family: 'Segoe Script';
}

/* Lista med kattraser*/
.list {
  color: #ffe6ff;
  clear: both;
  width: 225px;
  border: 1px solid gainsboro;
  padding: 1px;
  background-color: #7855a1;
}
</style>
