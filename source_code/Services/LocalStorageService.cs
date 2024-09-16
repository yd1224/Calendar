using Calendar.Models;
using Microsoft.JSInterop;

namespace Calendar.Services;

public class LocalStorageService(IJSRuntime jsRuntime)
{
    public async Task SetToDoToLocalStorage(string date, TodoItem newTodo)
    {
        await jsRuntime.InvokeVoidAsync("saveToLocalStorage", "todoItem", date, newTodo);
    }
    
    public async Task SetToDosToLocalStorage(string date, List<TodoItem> newTodos)
    {
        await jsRuntime.InvokeVoidAsync("saveToDosToLocalStorage", "todoItem", date, newTodos);
    }

    public async Task<List<TodoItem>> GetTodosFromLocalStorage(string date)
    {
        var todos = await jsRuntime.InvokeAsync<List<TodoItem>?>("getFromLocalStorage", "todoItem", date);
        return todos ?? [];
    }
}