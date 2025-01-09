import sqlite3

# Connect to the database
conn = sqlite3.connect("C:\Users\HP\OneDrive\Desktop\Mon Proje\Myproject\instance\nududu.db")

# Create a cursor object
cursor = conn.cursor()

# Query to list all tables
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")

# Fetch and print the table names
tables = cursor.fetchall()
print("Tables in the database:")
for table in tables:
    print(table[0])

# Close the connection
conn.close()
