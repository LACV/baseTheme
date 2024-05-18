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
        ->orderBy('employees.id','asc')
        ->paginate(5);

        //*** verify records received in json configuration ***
        //dd($employees);
        $departments = Department::all();
        return Inertia::render('Employee/Employee',['employees' => $employees,'departments' => $departments]);    
    }

    public function store(Request $request)
    {
       $request->validate([
            'name'=>'required|max:150',
            'email'=>'required|email|max:80',
            'phone'=>'required|max:15',
            'department_id'=>'required|numeric',
       ]);

       $employee = new Employee($request->input());
       $employee->save(); 
       return redirect('employee');
    }

    public function update(Request $request, Employee $employee)
    {
        $request->validate([
            'name'=>'required|max:150',
            'email'=>'required|email|max:80',
            'phone'=>'required|max:15',
            'department_id'=>'required|numeric',
       ]);
       $employee->update($request->input()); 
       return redirect('employee');
    }

    public function destroy(Employee $employee)
    {
        $employee->delete();
        return redirect('employee');
    }
}