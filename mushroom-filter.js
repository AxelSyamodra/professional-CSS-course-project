const cards = document.querySelectorAll(".mushroom-guide .card");

const seasonalFilter = document.querySelector("#season");
const edibleFilter = document.querySelector("#edible");

const noResultsMessage = document.querySelector(".no-matches");

const currentFilters = {
  season: "all",
  edible: "all",
};

// setting up view transitions name to each cards
cards.forEach((card, index) => {
  const mushroomId = `mushroom-${index + 1}`;
  card.style.viewTransitionName = `mushroom-card-${mushroomId}`;
});

seasonalFilter.addEventListener("change", updateFilter);
edibleFilter.addEventListener("change", updateFilter);

function updateFilter(e) {
  const filterType = e.target.name;
  currentFilters[filterType] = e.target.value;

  // for no browser support view transition
  if (!document.startViewTransition()) {
    filterCards();
    return;
  }
  // with same document view transition
  document.startViewTransition(() => filterCards());
}

function filterCards() {
  let hasVisibleCards = false;

  cards.forEach((card) => {
    // .getAttribute same as .dataset if using data []
    const season = card.querySelector("[data-season]").dataset.season;
    const edible = card.querySelector("[data-edible]").dataset.edible;

    const matchesSeason = currentFilters.season === season;
    const matchesEdible = currentFilters.edible === edible;

    // to filter and make 'all' shows up
    if (
      (currentFilters.season === "all" || currentFilters.season === season) &&
      (currentFilters.edible === "all" || currentFilters.edible === edible)
    ) {
      card.hidden = false;
      hasVisibleCards = true;
    } else {
      card.hidden = true;
    }

    if (hasVisibleCards) {
      noResultsMessage.hidden = true;
    } else {
      noResultsMessage.hidden = false;
    }
  });
}

// the fallback
function enableFiltering() {
  seasonalFilter.hidden = false;
  edibleFilter.hidden = false;
}

// filter will on when js is accessible
enableFiltering();
