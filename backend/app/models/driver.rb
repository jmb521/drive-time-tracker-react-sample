class Driver < ApplicationRecord

    has_many :trips


    def total_hours
        self.trips.map do|trip| 
            if trip.end_time
                (trip.end_time - trip.start_time)/(1000*60*60*24)
            end
        end
    end

    # def incomplete_trips
    #     self.trips.where(end_time: nil)
    # end
end
