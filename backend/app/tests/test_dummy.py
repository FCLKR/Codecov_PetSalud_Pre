import pymysql
import pytest

DB_CONFIG = {
    "host": "db",
    "user": "user1",
    "password": "12345",
    "database": "mydb",
    "port": 3306,
}

def test_insertar_specialist_mysql():
    conn = pymysql.connect(**DB_CONFIG)
    cursor = conn.cursor()

    # Datos de prueba
    name_specialist = "Carlos"
    lastName_specialist = "Test"
    cc_specialist = 2343546
    phone_specialist = 3056789
    adress_specialist = "kR8"
    email_specialist = "Veterinaria@gmail.com"

    # Insertar registro
    insert_query = """
        INSERT INTO myproject_spealist 
        (name_specialist, lastName_specialist, cc_specialist, phone_specialist, adress_specialist,email_specialist)
        VALUES (%s, %s, %s, %s, %s,%s)
    """
    cursor.execute(insert_query, (
        name_specialist,
        lastName_specialist,
        cc_specialist,
        phone_specialist,
        adress_specialist,
        email_specialist
    ))
    conn.commit()

    assert cursor.rowcount == 1

    last_id = cursor.lastrowid

    cursor.execute(
        """
        SELECT name_specialist, lastName_specialist, cc_specialist, 
               phone_specialist, adress_specialist,email_specialist
        FROM myproject_spealist 
        WHERE id = %s
        """,
        (last_id,)
    )

    # Limpieza del registro (opcional) #cursor.execute( 
    # "DELETE FROM myproject_specialist WHERE id = %s", 
    # (last_id,) 
    #)

    result = cursor.fetchone()

    assert result is not None
    assert result[0] == name_specialist
    assert result[1] == lastName_specialist
    assert result[2] == cc_specialist
    assert result[3] == phone_specialist
    assert result[4] == adress_specialist
    assert result[5] == email_specialist

    cursor.close()
    conn.close()

