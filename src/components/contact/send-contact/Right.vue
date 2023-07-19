<template>
    <div class="main">
        <form name="send-contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" netlify>
            <input placeholder="Name" v-model="name"/>
            <div class="email-phone">
                <p class="hidden"><label>Don’t fill this out: <input name="bot-field"></label></p>
                <input placeholder="Email" v-model="email"/>
                <input placeholder="Phone" v-model="phone"/>
            </div>
            <p>
                <button type="submit" class="btn block">Send</button>
            </p>
            <BlueButton @click="submit">Submit</BlueButton>
        </form>
        <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
    </div>
</template>

<script>
import positions from "@/data/positions"
export default {
    data() {
        return {
            name: '',
            phone: "",
            email: "",
            submit_data: {}
        }
    },
    methods: {
        submit() {
            this.submit_data = {
                name: this.name,
                phone: this.phone,
                email: this.email
            }
            console.log(this.submit_data);
        },
        file_cv(e) {
            this.cv = e.target.value
            console.log(e.target.value);
        }
    },
}
</script>
<style lang="scss" scoped>
input {
    width: 100%;
    height: 47px;
    border: 1px solid #EDEDED;
    outline: none;
    padding: 0 20px 0 20px;
    font-weight: 600;
    font-size: 14px;
    color: var(--greyscale--grey);
    &::placeholder {
        font-weight: 400;
    }
}
.main {
    width: 50%;
    form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 25px;
        .email-phone {
            display: flex;
            flex-direction: row;
            gap: 25px;
        }
        select {
            width: 100%;
            height: 47px;
            border: 1px solid #EDEDED;
            outline: none;
            padding: 0 20px 0 20px;
            font-weight: 600;
            font-size: 14px;
            color: var(--greyscale--grey);
            option {
                width: 100%;
                height: 47px;
            }
        }
    }
}
</style>