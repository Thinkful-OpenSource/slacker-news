class BugController < ApplicationController
  def index
    #Display form for filing a new bug
    @bug = Bug.new
  end
  
  def create
    #Send bug to slack channel
    ReportBugJob.perform_later(bug_params)
    render :index
  end
  
  private
  
  def bug_params
    params.require(:bug).permit(:user, :message, :type)
  end
  
end
