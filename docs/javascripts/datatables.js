document$.subscribe(function() {
  var tables = document.querySelectorAll(".datatable table")
  tables.forEach(function(table) {
    new DataTable(table, {
      columnControl: ['order', ['searchList']],
      lengthMenu: [10, 25, 100, { label: 'All', value: -1 }]
    });
  })
})