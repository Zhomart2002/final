<template>
    <div class="body">
        <div class="content">
             <div class="welcome">
                Welcome to Jomazon
            </div>

            <div class="login-block">
                <input v-model="username" class="form-control" type="text" placeholder="Username" autocomplete="off">
                <button class="btn btn-primary btn-sm" @click="logIn" >Login</button>
            </div>
        </div>    
    </div>
</template>

<script>
    export default {
      data(){
          return {
              username: ''
          }
      },
      methods: {
          logIn(){
              if(this.username){
                  this.$store.dispatch('logIn', this.username);
                  this.$router.push('/');
              }
          }
      }
    } 
</script>

<style lang="scss" scoped>

    $orange: #FF9A00;

    .body{
        
        display: flex;
        justify-content: center;
        text-align: center;

        .content{
            margin-top: 90px;

            .welcome{
                margin-bottom: 20px;
                font-size: 42px;
                user-select: none;
                color: $orange;
            }

            .login-block{
                display: inline-block;

                input{
                    width: 300px;
                    text-align: center;
                    margin: 0 auto;
                }

                button{
                    width: 150px;
                    margin-top: 7px;
                }
            }
        }
    }

</style>
