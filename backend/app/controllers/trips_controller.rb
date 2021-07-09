class TripsController < ApplicationController

    def create
        if driver = Driver.find_by(id: params[:trip][:driver_id])
            trip = driver.trips.build(trip_params)
            if trip.save
                render json: trip
            else
                render json: {
                    error: trip.errors.full_messages
                }
            end
        else
            render json: {
                error: "Driver not found"
            }
        end
    end

    def update
        trip = Trip.find_by(id: params[:id])
        if trip && trip.update(trip_params) 
            render json: trip
        else
            render json: {
                error: trip.errors.full_messages
            }
        end
    end

    def index
        trip = Trip.all
        render json: trip
    end


    private

    def trip_params
        params.require(:trip).permit(:weather, :start_time, :end_time, :time_of_day, :driver_id, :id)
    end
end
