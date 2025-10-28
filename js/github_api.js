console.log("github_api loaded");

function loadGitHubStats() {
  const users = [];
  const repos = [];

  $(".ghbtn").each(function () {
    const user = $(this).attr("user");
    const repo = $(this).attr("repo");

    if (!user || !repo) return;
    repos.push(user + "/" + repo);
    if (users.indexOf(user) === -1) {
      users.push(user);
    }
  });

  for (let i = 0; i < repos.length; i++) {
    $.ajax({
      type: "GET",
      url: "https://api.github.com/repos/" + repos[i],
      tryCount: 0,
      retryLimit: 3,
      async: true,
      dataType: "json",
      success: function (data) {
        const repoName = data.name;
        const parentDiv = $("div[repo='" + repoName + "']");

        parentDiv.find("span.star").html("&nbsp;" + data.stargazers_count);
        parentDiv.find("span.fork").html("&nbsp;" + data.forks_count);
        parentDiv.find("span.watchers").html("&nbsp;" + data.watchers_count);
        $("div[repotext='" + repoName + "']").find("span.desc").html(data.description);
      },
      error: function (xhr, textStatus, errorThrown) {
        console.error("GitHub API failed for " + repos[i]);
      },
    });
  }
}

// Run on initial load and after small delay (in case of lazy rendering)
$(document).ready(function () {
  loadGitHubStats();
  setTimeout(loadGitHubStats, 1500); // ensures late elements are also handled
});
