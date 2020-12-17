/* 
VARIABLES

En JS 5, on utilise le mot-clé var (facultatif) pour déclarer des variables:

  var myVariable = 'text';

En JS 6, le mot-clé var est obsolète et est remplacé par const et let:

  const myVariable = 'text;   // pour une variable dont la valeur ne doit pas changer
  let myVariable = 'text';  // pour permettre à la variable de changer de valeur plus tard

*/
const app = {
  // Sélectionne le formulaire "Add todo"
  addTodoForm: document.getElementById('add-todo'),
  // Sélectionne le champ texte
  todoNameInput: document.getElementById('add-todo-name'),
  // Sélectionne le champ texte
  addTodoButton: document.getElementById('add-todo-button'),
  // Sélectionne la liste des tâches à faire
  todoList: document.getElementById('todo-list'),

  // Initialise l'application
  init: function() {
    // Associe une action au fait de valider le formulaire "Add todo"
    app.addTodoForm.addEventListener(
      'submit',
      function(event) {
        // Empêche le rechargement de la page
        // (comportement normal du fait de valider un formulaire)
        event.preventDefault();
        // Récupère le contenu du champ texte
        const todoName = app.todoNameInput.value;
        // Efface le contenu du champ texte
        app.todoNameInput.value = '';
        // Désactive le bouton
        app.addTodoButton.disabled = true;
        // Ajoute une nouvelle tâche
        app.addTodo(todoName);
      }
    );
    // Associe une action au fait que la valeur du champ texte soit modifiée
    app.todoNameInput.addEventListener(
      'input',
      function(event) {
        // Si le champ texte est vide
        if (event.target.value === '') {
          // Désactive le bouton
          app.addTodoButton.disabled = true;
          // Sinon
        } else {
          // Enlève le statut désactivé du bouton
          app.addTodoButton.disabled = false;
        }
      }
    );
    // Ajoute des tâches par défaut
    app.addTodo('Acheter des bananes');
    app.addTodo('Ranger ma chambre');
    app.addTodo('Relire mes cours de JavaScript');
  },

  // Ajoute une nouvelle tâche à faire dans la liste
  addTodo: function(todoName) {
    // Crée un nouvel élément et lui applique le texte donné en entrée
    const newTodo = document.createElement('li');
    newTodo.className = 'todo list-group-item d-flex justify-content-between';
    newTodo.innerText = todoName;
    // Ajoute cet élément dans la liste
    app.todoList.appendChild(newTodo);
    // Crée une checkbox
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    // Associe une action au fait de cocher la checkbox
    checkBox.addEventListener(
      'change',
      function(event) {
        // Si la checkbox vient d'être cochée
        if (event.target.checked) {
          // Rajouter une classe "done" afin de faire apparaître
          // la tâche comme terminée
          newTodo.classList.add('done');
        // Sinon
        } else {
          // Enlever la classe "done" afin de faire apparaître
          // la tâche comme non terminée
          newTodo.classList.remove('done');
        }
      }
    );
    // Ajoute la checkbox au nouvel élément de liste
    newTodo.appendChild(checkBox);
    // Crée un nouveau bouton "Supprimer"
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-outline-danger btn-sm';
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    // Associe une action au fait de cliquer sur le bouton "Supprimer"
    deleteButton.addEventListener(
      'click',
      function() {
        // Supprime l'élément de la liste
        app.todoList.removeChild(newTodo);
      }
    );
    // Ajoute ce bouton au nouvel élément de liste
    newTodo.appendChild(deleteButton);
  },
};

// Initialise l'application automatiquement au chargement de la page
app.init();
