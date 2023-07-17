<template>
  <div>
    <div class="title">
      <BigNavigationText>Contact Us</BigNavigationText>
      <SmallNavigationText>Home / Contact Us</SmallNavigationText>
    </div>
    <Container>
      <div class="main">
        <ContactThirdIndex/>
      </div>
    </Container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.title {
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--main--navigation);
  margin-bottom: 100px;
}
.main {
  display: flex;
  flex-direction: column;
  gap: 100px;
  &:last-child {
    margin-bottom: 100px;
  }
}
</style>
