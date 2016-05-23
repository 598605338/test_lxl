package test_threadpool;

public class MyRunnable implements Runnable {
	
	private String name;
	private int max;
	
	

	public MyRunnable(String name, int max) {
		this.name = name;
		this.max = max;
	}



	@Override
	public void run() {
		for(int i=0;i<= max;i++){
			try {
				Thread.sleep(5);
				System.out.println(name + ".i=" + i);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}

}
