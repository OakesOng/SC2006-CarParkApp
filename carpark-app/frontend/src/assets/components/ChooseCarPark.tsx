import React, { useEffect, useState } from "react";

// Define a TypeScript type for the data you expect
interface ProcessedData {
  destinationLocation: [number, number];
  results: {
    [key: string]: {
      carpark_code: string;
      distance: string;
      duration: string;
      lots_available: string;
      total_lots: string;
      latitude: number; // Add latitude property
      longitude: number; // Add longitude property
    };
  };
}

const ChooseCarPark = () => {
  const [data, setData] = useState<ProcessedData | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const jsonData = urlParams.get("data");

    if (jsonData) {
      try {
        // Decode the URL-encoded JSON data
        const decodedData = decodeURIComponent(jsonData);
        const parsedData = JSON.parse(decodedData) as ProcessedData;
        setData(parsedData);
      } catch (error) {
        console.error("Error parsing JSON data:", error);
      }
    }
  }, []);

  const handleNavigate = (
    address: string,
    latitude: number,
    longitude: number
  ) => {
    // Construct the URL with latitude, longitude, and destination location
    if (data) {
      const destinationLocation = data.destinationLocation;
      const mapURL = `/Map?address=${encodeURIComponent(
        address
      )}&latitude=${latitude}&longitude=${longitude}&destLat=${
        destinationLocation[0]
      }&destLon=${destinationLocation[1]}`;

      // Navigate to the /Map page with the constructed URL
      window.location.href = mapURL;
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "65vh" }}
    >
      {data ? (
        <div className="col-lg-8">
          <h3 className="text-center mb-4">Choose a Car Park</h3>
          <div className="card">
            <div className="card-body text-center">
              <div style={{ maxHeight: "400px", overflowY: "auto" }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th className="text-center">Address</th>
                      <th className="text-center">Distance</th>
                      <th className="text-center">Duration</th>
                      <th className="text-center">Lots Vacancies</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(data.results).map(([key, value]) => (
                      <tr key={key}>
                        <td className="text-center">{key}</td>
                        <td className="text-center">{value.distance}</td>
                        <td className="text-center">{value.duration}</td>
                        <td className="text-center">
                          {value.lots_available} / {value.total_lots}
                        </td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() =>
                              handleNavigate(
                                key,
                                value.latitude,
                                value.longitude
                              )
                            }
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                            }}
                          >
                            <img src="../../compass.png" alt="Navigate" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default ChooseCarPark;
