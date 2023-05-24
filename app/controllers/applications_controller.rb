class ApplicationsController < ApplicationController

    # This route is not used but was written to fulfill project requirements:
    # ______________________________________
    # def index
    #     applications = Application.all
    #     render json: applications
    # end
    # ______________________________________

    def create
        application = @user.applications.create!(strong_params)
        render json: application, status: :created
    end
    
    def update
        application = @user.applications.find(params[:id])
        application.update!(strong_params)
        render json: application
    end
    
    def destroy
        application = @user.applications.find(params[:id])
        application.destroy
        render json: application
    end

    private 

    def strong_params
        params.permit(:first_name, :last_name, :age, :work_experience, :job_id, :phone_number, :email_address)
    end

end

















