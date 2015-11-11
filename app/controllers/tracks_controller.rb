class TracksController < ApplicationController
  def index
    @all_tracks = Track.all

    render json: @all_tracks
  end

  def new
  end

  def create
    @new_track = Track.new(track_params)

    if @new_track.save
      render json: @new_track
    else
      render json: @new_track.errors.full_messages
    end

  end

  def edit
  end

  def update
    @track= Track.find(params[:id])

    if @track.update(track_params)
      render json: @track
    else
      render json: @track.errors.full_messages
    end
  end

  def destroy
    @track= Track.find(params[:id])

    if @track.destroy
      render json: @track
    else
      render json: @track.errors.full_messages
    end
  end

  private

  def track_params
    params.require(:track).permit(:track_attributes)
  end

end
