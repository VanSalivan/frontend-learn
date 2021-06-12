//! Собственные события

import TodoListItem from "../components/todo-list-item/todo-list-item";

//* Для того чтобы удалить элемент нужно удалить его из источника данных
//* Мы передаем функции по иерархии компонентов
// =========================================================
//? Схема
<App>       <= todoData
    <AppHeader>
    <SearhPanel>
    <ItemStatusFilter>
    <TodoList>
        <TodoListItem> <= Button
        <TodoListItem>

//* Для удаления элемента внутри иерархии нам нужно чтобы данные на ВВЕРХУ на уровне <App> обновились
//* Нужно что бы <App> узнавал что кнопка на уровне <TodoListItem> была нажата
// =========================================================
                                    
//* 1) Делаем событие которое будет генерировать <TodoListItem>
//* 2) Которое будет слушать <TodoList>
//* 3) <TodoList> Передаст это событие еще выше в <App>
//* 4) <App> обновит массив и элемент <TodoListItem> исчезнет
// =========================================================

//? Практика
// =========================================================
//! todo-list компонент
//* 1)Передаем в компонент функцию "onDeleted"  
                                                
const TodoList = ({ todos }) => {
    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps} onDeleted={() => console.log('deleted')} /> //* Передаем в компонент функцию "onDeleted"
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements}
        </ul>
    );
};

// =========================================================
//! todo-list-item компонент
//* 2)Назначаем кнопке функцию "onClick" и забираем свойство из обьекта this.props
                                                
render() {
        return (
            <span className={classNames}>
                <span className="todo-list-item-label" onClick={this.onLabelClick}>{label}</span>

                <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={this.setMarkImportant}>
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button" className="btn btn-outline-danger btn-sm float-right"
                onClick={this.props.onDeleted}> //* 2)Назначаем кнопке функцию "onClick" и забираем свойство из обьекта this.props
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
}
//* Связь компонетов создана!
// =========================================================
                                                
//* 3) Деструктурируем передаенное свойство "onDeleted"                
    render() {
        const { done, important } = this.state;
        const { label, onDeleted } = this.props; //* 3) Деструктурируем передаенное свойство "onDeleted"
                                                    
        return (
            <span className={classNames}>
                <span className="todo-list-item-label" onClick={this.onLabelClick}>{label}</span>

                <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={this.setMarkImportant}>
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button" className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}> //* 3) Деструктурируем передаенное свойство "onDeleted"
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }

// =========================================================
//! App компонент
//* 4) Регистрируем новое событие "TodoList" в компоненте "App"
const App = () => {
    const todoData = [
        { label: 'Learn React', important: false, id: 1 },
        { label: 'Make App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 },
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            //* 4) Регистрируем новое событие "TodoList" в компоненте "App"
            <TodoList todos={todoData} onDeleted={(id) => console.log('del', id)} /> 
        </div>
    );
};

// =========================================================
//! todo-list компонент
//* 5) Деструктурируем переданный параметр в обьекте props "onDeleted"
//* 6) передаем функции Деструктурированную параметр-функцию "onDeleted(id)" c Деструктурованым {id}
                                           
const TodoList = ({ todos, onDeleted }) => { //* 5) Деструктурируем переданный параметр в обьекте props "onDeleted"
    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className="list-group-item">
//* 6) передаем функции Деструктурированную параметр-функцию "onDeleted(id)" c Деструктурованым {id}
                <TodoListItem {...itemProps} onDeleted={() => onDeleted(id)} /> 
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements}
        </ul>
    );
};
// =========================================================
//* Следующим шагом будет удалить этот элемент их массива и обновить приложение
//* Сейчас сделать это не сможет потому что массив todoData - НЕ ЧАСТЬ СОСТОЯНИЯ
//* Не часть state компонента <App>
