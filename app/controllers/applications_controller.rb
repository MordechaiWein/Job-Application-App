class ApplicationsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_application_errors
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  
    #This route is not used but was written to fulfill project requirements:
    #______________________________________
    # def index
    #     applications = Application.all
    #     render json: applications
    # end
    #______________________________________
    
    def create
        user = User.find_by(id: session[:user_id])
        application = user.applications.create(strong_params)
        if application.valid?
            render json: application, status: :created
        else
            render json: {errors: application.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        user = User.find(session[:user_id])
        application = user.applications.find(params[:id])
        application.update!(strong_params)
        render json: application
    end
    
    def destroy
        user = User.find(session[:user_id])
        application = user.applications.find(params[:id])
        application.destroy
        render json: application
    end
    
    private 

    def strong_params
        params.permit(:first_name, :last_name, :age, :work_experience, :job_id, :phone_number, :email_address, :application_name)
    end

    def render_application_errors(instance)
        render json: {errors: instance.record.errors.full_messages }, status: :unprocessable_entity
    end
    
    def render_not_found
        render json: { error: "Not Authorized" }, status: :unauthorized
    end

end





