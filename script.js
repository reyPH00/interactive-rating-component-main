function submitFunc(e) {
    const value = document.querySelector(
      'input[name="rating"]:checked'
    ).value;

    let main = document.getElementById("main");
    main.classList.add("hidden");

    let thanks = document.getElementById("thanks");
    thanks.classList.toggle("hidden");

    document.getElementById(
      "selection"
    ).innerHTML = `You selected ${value} out of 5`;
  }