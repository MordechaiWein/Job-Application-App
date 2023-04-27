class ApplicationsController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        render json: user.applications
    end
  

    def create
        user = User.find_by(id: session[:user_id])
        if user
            application = user.applications.create(strong_params)
            if application.valid?
               render json: application, status: :created
            else
                render json: {errors: application.errors.full_messages}, status: :unprocessable_entity
            end
        else
            render json: {errors: ['unauthorized'] }, status: :unauthorized
        end
    end

    def destroy
        application = Application.find_by(id: params[:id])
        application.destroy
        render json: application
    end

    private 

    def strong_params
        params.permit(:first_name, :last_name, :age, :work_experience, :job_id, :phone_number, :email_address, :application_name)
    end

end


