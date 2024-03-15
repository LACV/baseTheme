<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use App\Models\Department;
use Inertia\Inertia;

class EmployeeeController extends Controller
{
    public function index()
    {
        $employees = Employee::select('employees.id','employees.name','email','phone','department_id','departments.name as departments')
        ->join('departments','departments.id','=','employees.department_id')
        ->paginate(10);

        $departments = Department::all();

        return Inertia::render('Employee',['employees' => $employees,'department' => $departments]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(string $id)
    {
        //
    }

    public function edit(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        //
    }
}
