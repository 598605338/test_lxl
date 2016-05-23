package test_enum;

public enum Color {
	RED("红色", 0), BLUE("蓝色", 1);

	private Color(String name, int index) {
		this.name = name;
		this.index = index;
	}

	private String name;
	private int index;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}

	public String toString() {
		return super.toString() + "(" + this.name + "," + this.index + ")";
	}

	public static Color getColor(int index) {
		switch (index) {
		case 0:
			return RED;
		case 1:
			return BLUE;
		default:
			return RED;
		}
	}
}
