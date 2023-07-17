<template>
  <div class="main">
    <TitleName>Contact</TitleName>
    <TitleInfo>Let us kow what you need!</TitleInfo>
    <h4>
        Looking for digital consulting that will yield results, or just curious about what we are about? You’re in the right place. Email. Phone. Social media. Connect with the right team.
    </h4>
    <div class="info">
        <div class="icon">
            <img src="@/assets/icon/Location.svg" alt="Location">
        </div>
        <p>San Antonio, Texas, USA</p>
    </div>
    <div class="info">
        <div class="icon">
            <img src="@/assets/icon/Phone.svg" alt="phone">
        </div>
        <p>+1 (830) 391 8431</p>
    </div>
    <div class="info">
        <div class="icon">
            <img src="@/assets/icon/email.png" alt="Email">
        </div>
        <p>nico@cumbiaconsulting.com</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    h4 {
        font-size: 18px;
        font-weight: 400;
        color: var(--greyscale--grey);
    }
    .info {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        .icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(240, 137, 156, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 16px;
            }
        }
        p {
            font-size: 18px;
            font-weight: 400;
            color: var(--greyscale--grey);
        }
    }
}
</style>
