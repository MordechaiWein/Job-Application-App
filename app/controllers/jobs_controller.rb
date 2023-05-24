class JobsController < ApplicationController
    skip_before_action :authorize, only: [:index]
    
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

end

# Create a custom route that takes a word as an argument and finds all the jobs that have a fuzzy match 
# (not case sensitive and any part of the string matches that word). 
# Once you have the set of jobs that matches, render back the applications for those jobs.
# If there are no jobs, render json that says so. 
# If there are no applications yet, render json that says so.


## my game plan
#1. create custom route with a parameter called word
#2. filter the jobs table with the jobs that have a description thta inlcudes the word (fuzy)
# if there are jobs do the below
#3 map through the list to extract a new array of the applications for the jobs
#nested if there are apps render them
#otherwise error no applictions
#else render error of no jobs

    # def example
    #     jobs = Job.all.filter {|j| j.job_description.downcase.include?(params[:word].downcase)}
    #     if jobs.length > 0
    #         applications = jobs.map {|j| j.applications}.flatten
    #         if applications.length > 0
    #             render json: applications
    #         else
    #             render json: {error: "a user was found but no application were found..."}
    #         end
    #     else
    #         render json: {error: "no jobs found"}
    #     end
    # end
    