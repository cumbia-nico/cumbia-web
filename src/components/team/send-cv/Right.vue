<template>
    <div class="main">
        <form name="send-cv" enctype="multipart/form-data" netlify-honeypot="bot-field" netlify>
            <input placeholder="Name" v-model="name"/>
            <p class="hidden"><label>Don’t fill this out: <input name="bot-field"></label></p>
            <div class="email-phone">
                <input name="email" placeholder="Email" v-model="email"/>
                <input name="phone" placeholder="Phone" v-model="phone"/>
            </div>
            <select name="position" v-model="position">
                <option value="">Position applied for</option>
                <option :value="data.position" v-for="data in positions">{{ data.position }}</option>
            </select>
            <input name="portfoli" placeholder="Portfolio link" v-model="portfolio"/>
            <div class="file">
                <p>Upload your CV</p>
                <label for="file">
                    <img src="@/assets/icon/Drop.svg" alt="drop">
                    <p>Drag and drop your file here <br> Or <span>browse files</span></p>
                </label>
                <input name="file" id="file" type="file" @change="file_cv"/>
            </div>
            <BlueButton @click="submit">Submit</BlueButton>
        </form>
    </div>
</template>

<script>
import positions from "@/data/positions"
export default {
    data() {
        return {
            positions: positions,
            name: '',
            phone: "",
            email: "",
            position: "",
            portfolio: "",
            cv: "",
            submit_data: {}
        }
    },
    methods: {
        submit() {
            this.submit_data = {
                name: this.name,
                phone: this.phone,
                email: this.email,
                position: this.position,
                portfolio: this.portfolio,
                cv: this.cv
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
        .file {
            p {
                margin-bottom: 10px;
                color: var(--greyscale--grey);
            }
            label {
                cursor: pointer;
                width: 100%;
                border: 1px solid #EDEDED;
                padding: 20px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                text-align: center;
                gap: 10px;
                p {
                    line-height: 30px;
                    span {
                        color: var(--cc-honolulu-blue);
                    }
                }
            }
            input {
                display: none;
            }
        }
    }
}
</style>