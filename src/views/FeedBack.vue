<template>
  <div class="body">
    <div class="txt">
      How can we improve our website. Your opinion is <b>important</b> for us.
    </div>
    <form class="w-full max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-4">
        <div class="w-full md:w-1/2 px-3 mb-8 md:mb-0">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border border-red-500
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none focus:bg-white
            "
            id="grid-first-name"
            type="text"
            placeholder="Zhomart"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-last-name"
          >
            Last Name
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
            id="grid-last-name"
            type="text"
            placeholder="Suleymen"
          />
        </div>
      </div>
      <div>
        <textarea class="resize-none rounded-md" cols="50" rows="7"></textarea>
      </div>
        <button class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.body {
  text-align: center;

  form {
    margin: 20px auto;
  }

  textarea{
    margin: 0 auto;
    outline: none;
    padding: 5px;
    // -webkit-box-sizing: border-box;
    // -moz-box-sizing: border-box;
    // box-sizing: border-box;

    width: 100%;
  }
}
</style>