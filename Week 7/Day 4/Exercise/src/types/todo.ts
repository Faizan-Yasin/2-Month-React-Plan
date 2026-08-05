import type { Dispatch, SetStateAction } from 'react'

export interface ThemeProps {
    theme: boolean;
}

export interface TodoAppProps extends ThemeProps {
    setTheme: Dispatch<SetStateAction<boolean>>;
}

export interface Todo {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: string;
}

export type Filter = "all" | "active" | "completed";

export interface FilterBarProps {
    filter: Filter;
    setFilter: Dispatch<SetStateAction<Filter>>;
}

export interface TodoInputProps extends ThemeProps {
    title: string;
    description: string;
    setTitle: Dispatch<SetStateAction<string>>;
    setDescription: Dispatch<SetStateAction<string>>;
    handleAdd: () => void;
    editId: string | null;
}

export interface TodoStatsProps extends ThemeProps {
    todos: Todo[];
}

export interface TodoListProps extends ThemeProps {
    todos: Todo[];
    toggleTodo: (id: string) => void;
    handleUpdate: (todo: Todo) => void;
    handleDelete: (id: string) => void;
}

export interface TodoItemProps extends ThemeProps {
    todo: Todo;
    toggleTodo: (id: string) => void;
    handleUpdate: (todo: Todo) => void;
    handleDelete: (id: string) => void;
}