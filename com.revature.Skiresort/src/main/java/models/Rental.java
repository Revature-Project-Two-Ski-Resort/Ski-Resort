package models;

public class Rental {
    private int id;
    private String name;
    private float price;
    private String type;

    public Rental(){
        this.id = 0;
        name = "";
        price = 0;
        type = "";
    }
public Rental(int id,String n, float q,String t)
{
    this.id = id;
    name = n;
    price = q;
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
        return price;
    }

    public void setQuantity(float quantity) {
        this.price = quantity;
    }

    @Override
    public String toString() {
        return   name +
                "  " + price;
    }
}
