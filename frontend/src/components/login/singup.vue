<template lang="html">

   <div class="container">

    <header>
        <h2>GSM 지식in Sing Up</h2>
        
    </header>
    
    <div id="app" class="signup">
        <form>
            <div class="form-group">
                <label for="Name">Name</label>
                <input type="text" v-model="Name" />
            </div>

            <div class="form-group">
                <label for="psw1">Password <span id="characters">(6 or more characters required)</span></label>
                <input type="password" v-model="password1" />
                <span v-show="msg1">{{ pwd1_msg }}</span>
            </div>
            
            <div class="form-group">
                <label for="psw2">Repeat Password</label>
                <input type="password" v-model="password2" />
                <span v-show="msg2">{{ pwd2_msg }}</span>
            </div>

            <div class="form-group">
                <button :class="{active: disable_btn}" disabled="disable_btn" @click.prevent="on_signup()">Sign Up</button>
                <button :class="{active: false}" @click.prevent="on_singin()">Sing in</button>
            </div>
        </form>
    </div>
    
    
        
    
    </div>
</template>   

<script>
export default {
    mode:history,
  data() {
    return {
      Name:'',
      password1: '',
      pwd1_msg: '',
      password2: '',
      pwd2_msg: '',
      disable_btn: true,
      msg1: true,
      msg2: true
    }
  },
  
  // WATCH
  watch: {
    password1: function(value) {
      if(this.check_password_length(value, 'pwd1_msg', 6)) {
        this.check_passwords_match();
      }
    },
    password2: function(value) {
      if(this.check_password_length(value, 'pwd2_msg', 6)) {
        this.check_passwords_match();
      }
    }
  },
  
  // METHODS
  methods: {
    
    check_password_length(value, msg, total) {
      var length = value.length;
      var sum = 0;
      var display;
      
      sum = (total - length);
      
      switch(sum) {
        case 0:
          display = '';
          break;
        default:
          display = 'Keep going - just need '+ sum + ' more characters';
      }
      
      if(length >= total) {
        this[msg] = '';
        return true;
      } else {
        this[msg] = display;
        this.disable_btn = true;
        return false;
      }
      
    },
    
    check_passwords_match() {
      if(this.password1.length > 5 && this.password2.length > 5) {
          if(this.password2 != this.password1) {
            this.pwd2_msg = 'Passwords do not match';
            this.disable_btn = true;
            return true;
          } else {
            this.pwd2_msg = '';
            this.disable_btn = false;
            return false;
          }
        }
    },
    
    on_signup() {
        alert("Sing Up")
    }, 
    
    on_singin(){
        this.$router.push('/singin')
    }
  }
}
</script>

<style lang="css">
    @import url("https://fonts.googleapis.com/css?family=Roboto");
    * {
        box-sizing: border-box;
    }

    body {
        height: 100%;
        font-family: 'Roboto', sans-serif;
        background: linear-gradient(to left, #79CB0A, #B5D020);
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    header {
        margin: 30px 0;
        text-align: center;
    }

    header h2 {
        text-transform: uppercase;
        margin: 0;
    }

    header p {
        font-size: 1em;
    }

    header a {
        text-decoration: none;
        border-bottom: 2px dotted #FF8700;
        color: inherit;
    }

    .signup {
        width: 700px;
        height: 460px;
        position: relative;
        overflow: hidden;
        box-shadow: 10px 10px 60px rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-radius: 5px;
    }

    .signup:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        transform: scaleX(-1);
        z-index: -1;
        background: url(https://source.unsplash.com/Qmox1MkYDnY/900x500) no-repeat;
    }

    form {
        width: 50%;
        height: 80%;
        padding: 20px 50px 20px 20px;
    }

    form .form-group {
        display: flex;
        flex-direction: column;
        margin: 0 0 20px 0;
        color: #8F949B;
        font-size: .9em;
    }
    form .form-group label {
        margin: 0 0 16px 0;
    }

    form .form-group span {
        font-size: .8em;
        color: #FF3400;
    }

    form .form-group span#characters {
        font-size: .8em;
        color: #8F949B;
    }

    .form-group input[type="text"],
    .form-group input[type="password"] {
        border: none;
        outline: none;
        background: transparent;
        padding: 0 0 10px 0;
        font-size: 1em;
        border-bottom: 1px dotted #8F949B;
    }

    .form-group input[type="password"] {
        color: #FF3400;
    }

    form .form-group:last-child {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 40px 0 0 0;
    }

    form .form-group:last-child button {
        border: none;
        background: linear-gradient(to left, #FF8700, #FFB100);
        padding: 10px 30px;
        border-radius: 20px;
        color: #FFFFFF;
        font-size: .8em;
        font-weight: bold;
        letter-spacing: 1px;
        cursor: pointer;
    }

    form .form-group:last-child button.active {
        opacity: .5;
        cursor: default;
    }
    form .form-group:last-child a {
        color: #8F949B;
        text-decoration: dotted;
        font-size: .8em;
    }
</style>