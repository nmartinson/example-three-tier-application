exports.up = (pgm) => {
  pgm.createTable('states', {
    id: { type: 'serial', primaryKey: true },
    name: { type: 'varchar(100)', notNull: true, unique: true },
    abbreviation: { type: 'varchar(2)', notNull: true, unique: true },
    latitude: { type: 'numeric(10, 6)', notNull: true },
    longitude: { type: 'numeric(10, 6)', notNull: true },
    created_at: { type: 'timestamp', notNull: true, default: pgm.func('now()') },
  });

  // Insert all 50 US states with their approximate center coordinates
  const states = [
    { name: 'Alabama', abbreviation: 'AL', latitude: 32.8067, longitude: -86.7113 },
    { name: 'Alaska', abbreviation: 'AK', latitude: 64.2008, longitude: -152.2782 },
    { name: 'Arizona', abbreviation: 'AZ', latitude: 33.7298, longitude: -111.4312 },
    { name: 'Arkansas', abbreviation: 'AR', latitude: 34.9697, longitude: -92.3731 },
    { name: 'California', abbreviation: 'CA', latitude: 36.1163, longitude: -119.6674 },
    { name: 'Colorado', abbreviation: 'CO', latitude: 39.0598, longitude: -105.3111 },
    { name: 'Connecticut', abbreviation: 'CT', latitude: 41.5978, longitude: -72.7554 },
    { name: 'Delaware', abbreviation: 'DE', latitude: 39.3185, longitude: -75.4769 },
    { name: 'Florida', abbreviation: 'FL', latitude: 27.6648, longitude: -81.5158 },
    { name: 'Georgia', abbreviation: 'GA', latitude: 33.0406, longitude: -83.6431 },
    { name: 'Hawaii', abbreviation: 'HI', latitude: 21.0943, longitude: -157.4983 },
    { name: 'Idaho', abbreviation: 'ID', latitude: 44.2405, longitude: -114.4787 },
    { name: 'Illinois', abbreviation: 'IL', latitude: 40.3495, longitude: -88.9861 },
    { name: 'Indiana', abbreviation: 'IN', latitude: 39.8494, longitude: -86.2604 },
    { name: 'Iowa', abbreviation: 'IA', latitude: 42.0115, longitude: -93.2105 },
    { name: 'Kansas', abbreviation: 'KS', latitude: 38.5266, longitude: -96.7265 },
    { name: 'Kentucky', abbreviation: 'KY', latitude: 37.6681, longitude: -84.6701 },
    { name: 'Louisiana', abbreviation: 'LA', latitude: 31.1695, longitude: -91.8749 },
    { name: 'Maine', abbreviation: 'ME', latitude: 44.6939, longitude: -69.3819 },
    { name: 'Maryland', abbreviation: 'MD', latitude: 39.0639, longitude: -76.8021 },
    { name: 'Massachusetts', abbreviation: 'MA', latitude: 42.2352, longitude: -71.0275 },
    { name: 'Michigan', abbreviation: 'MI', latitude: 43.3266, longitude: -84.5361 },
    { name: 'Minnesota', abbreviation: 'MN', latitude: 45.6945, longitude: -93.9196 },
    { name: 'Mississippi', abbreviation: 'MS', latitude: 32.7416, longitude: -89.6787 },
    { name: 'Missouri', abbreviation: 'MO', latitude: 38.4561, longitude: -92.2884 },
    { name: 'Montana', abbreviation: 'MT', latitude: 46.9219, longitude: -103.6006 },
    { name: 'Nebraska', abbreviation: 'NE', latitude: 41.4925, longitude: -99.9018 },
    { name: 'Nevada', abbreviation: 'NV', latitude: 38.8026, longitude: -116.4194 },
    { name: 'New Hampshire', abbreviation: 'NH', latitude: 43.4525, longitude: -71.3187 },
    { name: 'New Jersey', abbreviation: 'NJ', latitude: 40.2989, longitude: -74.5210 },
    { name: 'New Mexico', abbreviation: 'NM', latitude: 34.8405, longitude: -106.2371 },
    { name: 'New York', abbreviation: 'NY', latitude: 42.1657, longitude: -74.9481 },
    { name: 'North Carolina', abbreviation: 'NC', latitude: 35.6301, longitude: -79.8064 },
    { name: 'North Dakota', abbreviation: 'ND', latitude: 47.5289, longitude: -99.7840 },
    { name: 'Ohio', abbreviation: 'OH', latitude: 40.3888, longitude: -82.7649 },
    { name: 'Oklahoma', abbreviation: 'OK', latitude: 35.5653, longitude: -96.9289 },
    { name: 'Oregon', abbreviation: 'OR', latitude: 43.8041, longitude: -120.5542 },
    { name: 'Pennsylvania', abbreviation: 'PA', latitude: 40.5908, longitude: -77.2098 },
    { name: 'Rhode Island', abbreviation: 'RI', latitude: 41.6809, longitude: -71.5118 },
    { name: 'South Carolina', abbreviation: 'SC', latitude: 33.8361, longitude: -80.9066 },
    { name: 'South Dakota', abbreviation: 'SD', latitude: 44.2998, longitude: -99.4388 },
    { name: 'Tennessee', abbreviation: 'TN', latitude: 35.7478, longitude: -86.6923 },
    { name: 'Texas', abbreviation: 'TX', latitude: 31.9686, longitude: -99.9018 },
    { name: 'Utah', abbreviation: 'UT', latitude: 39.3210, longitude: -111.0937 },
    { name: 'Vermont', abbreviation: 'VT', latitude: 43.9695, longitude: -72.7107 },
    { name: 'Virginia', abbreviation: 'VA', latitude: 37.7693, longitude: -78.1694 },
    { name: 'Washington', abbreviation: 'WA', latitude: 47.4009, longitude: -121.4905 },
    { name: 'West Virginia', abbreviation: 'WV', latitude: 38.4912, longitude: -82.9006 },
    { name: 'Wisconsin', abbreviation: 'WI', latitude: 44.2685, longitude: -89.6165 },
    { name: 'Wyoming', abbreviation: 'WY', latitude: 42.7559, longitude: -107.3025 },
  ];

  states.forEach((state) => {
    pgm.sql(`
      INSERT INTO states (name, abbreviation, latitude, longitude)
      VALUES ('${state.name}', '${state.abbreviation}', ${state.latitude}, ${state.longitude})
    `);
  });
};

exports.down = (pgm) => {
  pgm.dropTable('states');
};
