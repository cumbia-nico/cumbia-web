<template>
  <div class="home-left">
    <h1 class="big-text">We Build Your Software</h1>
    <p class="info-text">
      Cumbia Consulting leverages near shore resources to help staff your project with the resources to get you across the finish line.
    </p>
    <BlueButton><a href="#/contact" class="link">Contact Us</a></BlueButton>
    <div>
      <!-- <div class="star-group">
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.4122 0L11.0116 5.26604L16.8244 6.11062L12.6183 10.2107L13.6109 16L8.4122 13.2677L3.21346 16L4.2061 10.2107L0 6.11062L5.81283 5.26604L8.4122 0Z"
            fill="#F59E0B"
          />
        </svg>
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.4122 0L11.0116 5.26604L16.8244 6.11062L12.6183 10.2107L13.6109 16L8.4122 13.2677L3.21346 16L4.2061 10.2107L0 6.11062L5.81283 5.26604L8.4122 0Z"
            fill="#F59E0B"
          />
        </svg>
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.4122 0L11.0116 5.26604L16.8244 6.11062L12.6183 10.2107L13.6109 16L8.4122 13.2677L3.21346 16L4.2061 10.2107L0 6.11062L5.81283 5.26604L8.4122 0Z"
            fill="#F59E0B"
          />
        </svg>
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.4122 0L11.0116 5.26604L16.8244 6.11062L12.6183 10.2107L13.6109 16L8.4122 13.2677L3.21346 16L4.2061 10.2107L0 6.11062L5.81283 5.26604L8.4122 0Z"
            fill="#F59E0B"
          />
        </svg>
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.4122 0L11.0116 5.26604L16.8244 6.11062L12.6183 10.2107L13.6109 16L8.4122 13.2677L3.21346 16L4.2061 10.2107L0 6.11062L5.81283 5.26604L8.4122 0Z"
            fill="#F59E0B"
          />
        </svg>
      </div> -->
      <!-- <p class="second-info-text">
        Cumbia Consulting leverages near shore resources to help staff you project with the resources to get you across the finish line.
      </p> -->
    </div>
    <!-- <div class="user">
      <img src="@/assets/image/sulli_kiri.svg" alt="sulli kiri" />
      <div>
        <h4>Sulli Kiri</h4>
        <p>CEO Dream Team</p>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "Left",
};
</script>

<style lang="scss" scoped>

.home-left {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 992px) {
    width: 100%;
  }
  .big-text {
    font-size: 60px;
    font-weight: 600;
    color: var(--greyscale--black);
    @media screen and (max-width: 600px) {
      font-size: 48px;
    }
  }
  .info-text {
    font-weight: 400;
    font-size: 18px;
    color: var(--greyscale--grey);
  }
  .star-group {
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin-bottom: 10px;
  }
  .second-info-text {
    font-weight: 400;
    font-size: 14px;
    color: var(--greyscale--grey);
  }
  .user {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    img {
      width: 50px;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 4px;
      h4 {
        font-weight: 700;
        font-size: 18px;
      }
      p {
        font-size: 14px;
        font-weight: 600;
        color: var(--greyscale--grey);
      }
    }
  }
}
</style>
