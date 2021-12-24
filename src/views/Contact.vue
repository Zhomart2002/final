<template>
  <div class="body">
    <b>
      If you heed help, you can call to out managers.
    </b>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scoped="col">#</th>
          <th scoped="col">First Name</th>
          <th scoped="col">Last Name</th>
          <th scoped="col">Phone number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scoped="row">1</th>
          <th scoped="row">Zhomart</th>
          <th scoped="row">Suleymen</th>
          <th scoped="row">8-708-924-09-25</th>
        </tr>
        <tr>
          <th scoped="row">2</th>
          <th scoped="row">Пәленше</th>
          <th scoped="row">Түгеншиев</th>
          <th scoped="row">8-777-777-77-77</th>
        </tr>
        <tr>
          <th scoped="row">3</th>
          <th scoped="row">Біреу</th>
          <th scoped="row">Бірдемевич</th>
          <th scoped="row">8-700-000-00-00</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {

}
</script>


<style scoped lang="scss">
  .body{
    text-align: center;
    b{
      margin: 20px auto;
    }
    table{
      margin: 20px auto;
      width: 800px;
    }
  }
</style>