class JobsController < ApplicationController
    wrap_parameters format: []

    def index
        jobs = Job.all
        render json: jobs
    end

    def create
        job = Job.create(strong_params)
        if job.valid?
            render json: job
        else
            render json: {errors: job.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def strong_params
        params.permit(:name, :job_description, :pay)
    end

end
