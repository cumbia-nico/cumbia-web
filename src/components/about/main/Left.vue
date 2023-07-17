<template>
  <div class="left">
    <TitleName> About us </TitleName>
    <TitleInfo>
      We Have The Experts You Need
    </TitleInfo>
    <p class="lorem">
      At Cumbia Consulting we pride ourselves on our unique backgrounds, access to remote talent, and modern solutions.
    </p>
    <div class="projects">
      <div>
        <p>30+</p>
        <h4>Happy Clients</h4>
      </div>
      <div>
        <p>40+</p>
        <h4>Projects Completed</h4>
      </div>
    </div>
    <BlueButton><a href="#/service" class="link">View Service</a></BlueButton>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.left {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 992px) {
    width: 100%;
  }
  .lorem {
    font-size: 18px;
    font-weight: 400;
    color: var(--greyscale--grey);
    line-height: 32px;
  }
  .projects {
    display: flex;
    flex-direction: row;
    gap: 20px;
    div {
      display: flex;
      flex-direction: column;
      gap: 20px;
      p {
        font-weight: 600;
        font-size: 24px;
        color: var(--cc-honolulu-blue);
      }
      h4 {
        font-size: 18px;
        font-weight: 400;
        color: var(--greyscale--grey);
        line-height: 32px;
      }
    }
  }
}
</style>
