class Api::EmployeesController < ApplicationController

    # READ
    # GET	/api/employees
    def index
        render json: Employee.all
    end


    # GET /api/employees/:id
    def show
        render json: Employee.find(params[:id])
    end

    #CREATE
    # POST	/api/employees
    def create
        #TODO
        employee = Employee.create(name: 'SOME NAME', postion:'some position')
        render json employee
    end

    #UPDATE
    #PUT	/api/employees/:id
    def update
        #TODO
    end

    #DESTROY
    # DELETE /api/employees/:id
    ## here destroy an employee
    def destroy
      render json: Employee.find(params[:id]).destroy
    end
end
