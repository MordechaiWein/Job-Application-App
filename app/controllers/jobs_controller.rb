class JobsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_job_errors
    
    def index
        jobs = Job.all
        render json: jobs
    end

    def create
        job = Job.create!(strong_params)
        render json: job, status: :created
    end

    private

    def strong_params
        params.permit(:name, :job_description, :pay)
    end

    def render_job_errors(instance)
        render json: { errors: instance.record.errors }, status: :unprocessable_entity
    end

end
