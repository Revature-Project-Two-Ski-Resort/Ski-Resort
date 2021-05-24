package models;

public class Rental {
    private int id;
    private String name;
    private float quantity;
    private String type;

    public Rental(){
        this.id = 0;
        name = "";
        quantity = 0;
        type = "";
    }
public Rental(int id,String n, float q,String t)
{
    this.id = id;
    name = n;
    quantity = q;
    type = t;
}
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getQuantity() {
        return quantity;
    }

    public void setQuantity(float quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return   name +
                "  " + quantity;
    }
}
