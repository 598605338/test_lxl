package test_enum;

public class TestENUM {
	public static void main(String[] args){
		Color[] colors = Color.values();
		System.out.println(Color.BLUE.ordinal());
		System.out.println(Color.BLUE.name());
		System.out.println(Color.BLUE.compareTo(Color.RED));
		System.out.println(Color.getColor(1));
		
//		for(Color c: colors){
//			System.out.println(c.toString());
//		}
	}
}
