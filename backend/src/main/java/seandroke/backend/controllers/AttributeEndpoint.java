package seandroke.backend;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import seandroke.backend.AttributeRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/")
public class AttributeEndpoint {
	private final Logger logger = LoggerFactory.getLogger(getClass());

	private final AttributeRepository attributeRepository;

	public AttributeEndpoint(AttributeRepository attributeRepository) {
		this.attributeRepository = attributeRepository;
	}

	@RequestMapping(value = "/Attributes", method = RequestMethod.GET)
	@CrossOrigin(origins = "http://localhost:3000")
	public AttributeModel getAllAttributes() {
		return attributeRepository.findFirstByOrderByIdDesc();
	}
}