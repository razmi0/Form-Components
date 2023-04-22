<form method="get" class="px-sm-4" novalidate>
    <!-- Firstname -->
    <div class="form-group mt-3">
      <input
        type="text"
        name="firstname"
        id="firstname"
        class="form-control"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-title="Only alphabetical letters are allowed"
        required
      />
      <label
        class="mb-1 info-text-font form-title-input"
        for="firstname"
        >Firstname</label
      >
    </div>
    <!-- Lastname -->
    <div class="form-group mt-3">
      <input
        type="text"
        name="lastname"
        id="lastname"
        class="form-control"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-title="Only alphabetical letters are allowed"
        required
      />
      <label class="mb-1 info-text-font form-title-input" for="lastname"
        >Lastname</label
      >
    </div>

    <!-- Email -->
    <div class="form-group mt-3">
      <input
        type="email"
        name="email"
        id="email"
        class="form-control"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-title="Format must be : word@word.word"
        required
      />
      <label class="mb-1 info-text-font form-title-input" for="email"
        >E-mail</label
      >
    </div>
    <!-- Message -->
    <div class="form-group">
      <textarea
        class="form-control"
        placeholder="Leave your comment here"
        id="textarea"
        style="height: 100px"
        maxlength="300"
        minlength="10"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-title="Only alphabetical letters are allowed"
      ></textarea>
      <!-- <label class="mb-1 info-text-font form-title-input" for="textarea">Comments</label> -->
      <div
        id="textarea-counter-anchor"
        class="d-flex justify-content-end"
      ></div>
    </div>
    <div class="d-flex justify-content-end">
      <button type="submit" class="">
        <span>Send</span>
      </button>
    </div>
  </form>