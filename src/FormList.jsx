import { useState } from 'react';
import InputArea from './components/Inputarea';
import ToDoList from "./components/ToDoList";

const groceryItems = [];

function Header({ user }) {
    return (
        <h1>
            Catatan Belanja <br/> {user? `${user.FName} ${user.LName}` : ""}📝
            {user && (
                <div style={{ fontSize: 18 }}>
                    <div>Email:  {user.email}</div>
                </div>
            )}
        </h1>
    );
}

function Footer({ items }) {
    if (items.length === 0) return <footer className="stats">Daftar belanjaan masih kosong!</footer>;
    const totalItems = items.length;
    const checkedItems = items.filter((item) => item.checked).length;
    const percentage = Math.round((checkedItems / totalItems) * 100);
    return (
        <footer className="stats">
            Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percentage}%)
        </footer>
    );
}

function FormList({ user }) {
    const [items, setItems] = useState(groceryItems);

    function handleAddItem(item) {
        setItems([...items, item]);
    }
    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }
    function handleToggleItem(id) {
        setItems((items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
    }
    function handleClearItems() {
        setItems([]);
    }

    return (
        <div className="app">
            <Header user={user} />
            <InputArea onAddItem={handleAddItem} />
            <ToDoList
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
                onClearItems={handleClearItems}
            />
            <Footer items={items} />
        </div>
    );
}

export default FormList;