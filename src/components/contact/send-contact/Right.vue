<template>
    <div class="main">
        <!-- <form name="send-contact" method="POST" netlify-honeypot="bot-field" netlify>
            <input type="hidden" name="form-name" value="send-contact" />
            <input name="name" placeholder="Name"/>
            <div class="email-phone">
                <p class="hidden"><label>Don’t fill this out: <input name="bot-field"></label></p>
                <input name="email" placeholder="Email" />
                <input name="phone" placeholder="Phone"/>
            </div>
            <BlueButton @click="submit">Submit</BlueButton>
        </form> -->
        <form name="contact" method="POST" netlify>
            <p>
            <label class="mt-1 mb-8 text-primary-600 dark:text-primary-400">Your Name: <input type="text" name="name" /></label>   
            </p>
            <p>
            <label class="mt-1 mb-8 text-primary-600 dark:text-primary-400">Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
            <label class="mt-1 mb-8 text-primary-600 dark:text-primary-400">Message: <textarea name="message"></textarea></label>
            </p>
            <p>
            <button type="submit" class="btn block" >Send</button>
            </p>
        </form>
    </div>
</template>

<script>
export default {
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