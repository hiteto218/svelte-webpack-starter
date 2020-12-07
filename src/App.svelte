<script lang="typescript">
  let message: string = 'Hello world!';
</script>

<style lang="scss">
  :global(body, p) {
    margin: 0;
  }
  .message {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: gray;
      font-size: 3rem;
      text-align: center;
    }
  }
</style>

<div class="message">
  <p>
    {message}
  </p>
</div>

