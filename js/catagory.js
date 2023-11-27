const loadSingleCatagory = async (catagoryId) => {
  const tabActive = document.getElementById(catagoryId);
  const tabActive1000 = document.getElementById("1000");
  const tabActive1001 = document.getElementById("1001");
  const tabActive1003 = document.getElementById("1003");
  const tabActive1005 = document.getElementById("1005");
  if (catagoryId === "1000") {
    tabActive.classList.add("tab-active");
    tabActive1001.classList.remove("tab-active");
    tabActive1003.classList.remove("tab-active");
    tabActive1005.classList.remove("tab-active");
  } else if (catagoryId === "1001") {
    tabActive.classList.add("tab-active");
    tabActive1000.classList.remove("tab-active");
    tabActive1003.classList.remove("tab-active");
    tabActive1005.classList.remove("tab-active");
  } else if (catagoryId === "1003") {
    tabActive.classList.add("tab-active");
    tabActive1000.classList.remove("tab-active");
    tabActive1001.classList.remove("tab-active");
    tabActive1005.classList.remove("tab-active");
  } else {
    tabActive.classList.add("tab-active");
    tabActive1000.classList.remove("tab-active");
    tabActive1001.classList.remove("tab-active");
    tabActive1003.classList.remove("tab-active");
  }
  spinner(true);
  const CardContainer = document.getElementById("card-container");
  CardContainer.innerHTML = "";
  console.log(catagoryId);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${catagoryId}`
  );
  const data = await res.json();
  const dataArray = data.data;

  const emptyArray = [];
  if (dataArray.length === emptyArray.length) {
    spinner(false);
    
    const noDataFoundDiv = document.createElement("div");
    noDataFoundDiv.classList = `flex flex-col justify-center items-center`;
    noDataFoundDiv.innerHTML = `
     <img class="w-[140px] mb-4" src="./images/Icon.png" alt="" />
     <h3 class="text-xl md:text-3xl font-bold text-center">Oops!! Sorry, There is no content here</h3> 
    `;
    CardContainer.classList = "";
    CardContainer.appendChild(noDataFoundDiv);
  } else {
    CardContainer.classList = `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center`;
    handleCatagoryEvent(dataArray);
  }
};

const handleCatagoryEvent = (dataArray) => {
  dataArray.forEach((element) => {
    cardElement(element);
  });
  spinner(false);
};

const spinner = (isLoading) => {
  const spinner = document.getElementById("loading-spinner");
  if (isLoading) {
    spinner.classList.remove("hidden");
  } else {
    spinner.classList.add("hidden");
  }
};
