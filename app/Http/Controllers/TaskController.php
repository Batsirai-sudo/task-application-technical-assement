<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use App\Models\User;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $user = $request->user();
        return TaskResource::collection(User::find($user->id)->tasks);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return void
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreTaskRequest $request
     * @return TaskResource
     */
    public function store(StoreTaskRequest $request)
    {
        $result = Task::create($request->all());
        return new TaskResource($result);
    }

    /**
     * Display the specified resource.
     *
     * @param Task $task
     * @param Request $request
     * @return TaskResource
     */
    public function show(Task $task,Request $request)
    {
              $user = $request->user();
              if ($user->id !== $task->id){
                  return abort(403,'Unauthorized action');
              }

              return new TaskResource($task);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Task $task
     * @return void
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateTaskRequest $request
     * @param Task $task
     * @return TaskResource
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        $task->update($request->all());
        return new TaskResource($task);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Task $task
     * @param Request $request
     * @return Application|ResponseFactory|Response
     */
    public function destroy(Task $task, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $task->user_id){
            return abort(403,'Unauthorized action');
        }

        $task->delete();
        return response('',204);
    }
}
