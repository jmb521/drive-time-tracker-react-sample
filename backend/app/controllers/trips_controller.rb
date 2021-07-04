class TripsController < ApplicationController

    def create
        trip = Trip.new(trip_params)
        if trip.save
            render json: trip
        else
            render json: {
                error: trip.errors.full_messages
            }
        end
    end


    private

    def trip_params
        params.require(:trip).permit(:weather, )
    end
end
