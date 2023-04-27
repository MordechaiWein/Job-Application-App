class JobsController < ApplicationController

    def index
        jobs = Job.all
        render json: jobs
    end

    def create
    end

end
